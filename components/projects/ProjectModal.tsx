'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type ModalProject = {
  title: string;
  date?: string;
  collaborators?: string[];
  details?: string;
  imageUrl: string;   // fallback
  images?: string[];  // optional gallery
};

export default function ProjectModal({
  open,
  onClose,
  project,
}: {
  open: boolean;
  onClose: () => void;
  project: ModalProject;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [idx, setIdx] = useState(0);

  const imgs = (project.images?.length ? project.images : [project.imageUrl]).map(
    (s) => (s.startsWith('/') ? s : `/${s}`)
  );

  useEffect(() => {
    const d = ref.current!;
    if (open) {
      d.showModal();
      setIdx(0);
    } else {
      d.close();
    }
  }, [open]);

  const next = useCallback(() => setIdx((i) => (i + 1) % imgs.length), [imgs.length]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + imgs.length) % imgs.length), [imgs.length]);

  // keyboard nav
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, next, prev, onClose]);

  if (!project) return null;

  return (
    <dialog
      ref={ref}
      className="backdrop:bg-black/60 rounded-xl w-[min(1000px,92vw)] p-0 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <button
          className="p-2 rounded-md hover:bg-muted text-muted-foreground"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Image area: large, full image (no crop) */}
      <div className="relative bg-background">
        <div className="relative h-[56vh] md:h-[60vh]">
          <Image
            src={imgs[idx]}
            alt={`${project.title} image ${idx + 1}`}
            fill
            className="object-contain"   // ✅ full-sized inside viewport
            sizes="(min-width:1024px) 900px, 90vw"
            priority
          />
        </div>

        {/* Prev / Next */}
        {imgs.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white"
              onClick={prev}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white"
              onClick={next}
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
              {imgs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2.5 w-2.5 rounded-full ${i === idx ? 'bg-primary' : 'bg-white/50'}`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Body */}
      <div className="px-5 py-4 space-y-3">
        {(project.date || project.collaborators?.length) && (
          <div className="text-sm text-muted-foreground">
            {project.date}
            {project.date && project.collaborators?.length ? ' · ' : ''}
            {project.collaborators?.join(', ')}
          </div>
        )}

        <h4 className="text-base font-semibold">Project Description</h4>
        {project.details && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.details}
          </p>
        )}
      </div>
    </dialog>
  );
}
