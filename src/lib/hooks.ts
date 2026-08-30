import { useCallback, useState } from "react";
import { loadJSON, saveJSON } from "./storage";

export interface Bookmarks {
  schemes: string[];
  countries: string[];
  orgs: string[];
  doctrines: string[];
}
export type NoteMap = Record<string, string>;
export interface QuizAttempt {
  id: string;
  correct: boolean;
  at: number;
}
export interface MainsAttempt {
  id: string;
  words: number;
  overall: number;
  at: number;
}
export interface Progress {
  quizAttempts: QuizAttempt[];
  mainsAttempts: MainsAttempt[];
  revisionSeen: string[];
}

const emptyBookmarks: Bookmarks = { schemes: [], countries: [], orgs: [], doctrines: [] };
const emptyProgress: Progress = { quizAttempts: [], mainsAttempts: [], revisionSeen: [] };

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmarks>(() => loadJSON("bookmarks", emptyBookmarks));

  const toggleBookmark = useCallback((kind: keyof Bookmarks, id: string) => {
    setBookmarks((prev) => {
      const list = prev[kind] || [];
      const next = list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
      const updated = { ...prev, [kind]: next };
      saveJSON("bookmarks", updated);
      return updated;
    });
  }, []);

  return { bookmarks, toggleBookmark };
}

export function useNotes() {
  const [notes, setNotes] = useState<NoteMap>(() => loadJSON("notes", {} as NoteMap));

  const saveNote = useCallback((id: string, text: string) => {
    setNotes((prev) => {
      const updated = { ...prev, [id]: text };
      saveJSON("notes", updated);
      return updated;
    });
  }, []);

  return { notes, saveNote };
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => loadJSON("progress", emptyProgress));

  const recordQuizAttempt = useCallback((attempt: QuizAttempt) => {
    setProgress((prev) => {
      const updated = { ...prev, quizAttempts: [...prev.quizAttempts, attempt] };
      saveJSON("progress", updated);
      return updated;
    });
  }, []);

  const recordMainsAttempt = useCallback((attempt: MainsAttempt) => {
    setProgress((prev) => {
      const updated = { ...prev, mainsAttempts: [...prev.mainsAttempts, attempt] };
      saveJSON("progress", updated);
      return updated;
    });
  }, []);

  const markRevisionSeen = useCallback((id: string) => {
    setProgress((prev) => {
      if (prev.revisionSeen.includes(id)) return prev;
      const updated = { ...prev, revisionSeen: [...prev.revisionSeen, id] };
      saveJSON("progress", updated);
      return updated;
    });
  }, []);

  return { progress, recordQuizAttempt, recordMainsAttempt, markRevisionSeen };
}
