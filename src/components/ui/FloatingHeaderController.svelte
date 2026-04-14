<script lang="ts">
  import { onMount } from 'svelte';

  export let selector = '.site-header';
  export let threshold = 24;
  export let mobileBreakpoint = 720;

  onMount(() => {
    const header = document.querySelector<HTMLElement>(selector);

    if (!header) {
      return undefined;
    }

    const desktopMedia = window.matchMedia(`(min-width: ${mobileBreakpoint}px)`);
    let rafId = 0;

    const syncScrollState = () => {
      rafId = 0;
      header.dataset.scrollState =
        desktopMedia.matches && window.scrollY > threshold ? 'condensed' : 'top';
    };

    const handleScroll = () => {
      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(syncScrollState);
    };

    syncScrollState();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  });
</script>
