import React, { useEffect, useRef } from 'react';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import './bulgeHeader.css';

interface BulgeTextProps {
  text: string;
  className?: string;
}

/**
 * BulgeTextHeader
 * ----------------
 * Splits the provided text into individual characters for animation
 * and restarts the "animate-bulge" CSS animation whenever the className changes.
 * Also syncs data-scroll attribute based on bulge-class.
 */
const BulgeTextHeader: React.FC<BulgeTextProps> = ({ text, className = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const lastStatus = useRef<'in' | 'out' | null>(null);

  // 1) On mount, split text into char spans
  useEffect(() => {
    const splits = Splitting({ target: '[data-splitting]', by: 'chars' });
    return () => {
      // cleanup data-splitting attribute on unmount
      splits.forEach(({ el }) => el instanceof HTMLElement && el.removeAttribute('data-splitting'));
    };
  }, []);

  // 2) Whenever className changes, if it includes "animate-bulge",
  //    perform reflow hack: remove and re-add class to restart CSS animation
  useEffect(() => {
    const el = ref.current;
    if (el && className.includes('animate-bulge')) {
      // remove the class to reset animation
      el.classList.remove('animate-bulge');
      // force reflow to flush the removal
      void el.offsetWidth;
      // re-add class to trigger animation
      el.classList.add('animate-bulge');
    }
  }, [className]);

  // 3) Sync data-scroll attribute based on bulge-class with double-trigger prevention
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const nextStatus = className.includes('animate-bulge') ? 'in' : 'out';

    // Prevent redundant attribute updates (double-trigger avoidance)
    if (lastStatus.current === nextStatus) return;

    el.setAttribute('data-scroll', nextStatus);
    lastStatus.current = nextStatus;
  }, [className]);

  return (
    <span
      ref={ref}
      className={`text--bulge ${className}`}
      data-splitting
    >
      {text}
    </span>
  );
};

export default BulgeTextHeader;
