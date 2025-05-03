import { useEffect, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackEvent, trackPageView } from '@/lib/analytics';

export interface UseAnalyticsProps {
  trackPageView?: boolean;
}

// Define AnalyticsEvent type locally
export interface AnalyticsEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Hook for tracking analytics events
 * 
 * @param options Configuration options
 * @returns Object with tracking methods
 */
export const useAnalytics = (options: UseAnalyticsProps = { trackPageView: true }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views when route changes
  useEffect(() => {
    if (options.trackPageView && pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      trackPageView(url, document.title);
    }
  }, [pathname, searchParams, options.trackPageView]);

  /**
   * Track a custom event
   */
  const trackAnalyticsEvent = useCallback((event: AnalyticsEvent) => {
    trackEvent(event);
  }, []);

  return {
    trackEvent: trackAnalyticsEvent,
  };
};

export default useAnalytics; 