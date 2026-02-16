// Analytics utility for tracking events across different platforms

interface AnalyticsEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  [key: string]: string | number | boolean | undefined; // For additional custom parameters
}

type GTagWindow = Window & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  gtag?: (...args: any[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fbq?: (...args: any[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataLayer?: any[];
};

// Google Analytics event
export const trackGAEvent = (event: AnalyticsEvent): void => {
  if (typeof window !== 'undefined') {
    const w = window as GTagWindow;
    if (w.gtag) {
      const { action, category, label, value, nonInteraction = false, ...rest } = event;
      w.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        non_interaction: nonInteraction,
        ...rest
      });
    }
  }
};

// Facebook Pixel event
export const trackFBEvent = (event: AnalyticsEvent): void => {
  if (typeof window !== 'undefined') {
    const w = window as GTagWindow;
    if (w.fbq) {
      const { action, ...params } = event;
      w.fbq('track', action, params);
    }
  }
};

// Track page view
export const trackPageView = (url: string, title?: string): void => {
  if (typeof window !== 'undefined') {
    const w = window as GTagWindow;
    // Google Analytics 4 page view
    if (w.gtag && process.env.NEXT_PUBLIC_GA_ID) {
      w.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
        page_title: title
      });
    }

    // Facebook Pixel page view
    if (w.fbq) {
      w.fbq('track', 'PageView');
    }
  }
};

// Consolidated method to track events across all platforms
export const trackEvent = (event: AnalyticsEvent): void => {
  trackGAEvent(event);
  trackFBEvent(event);

  // For Google Tag Manager (GTM)
  if (typeof window !== 'undefined') {
    const w = window as GTagWindow;
    if (w.dataLayer) {
      const dataLayerEvent = {
        event: event.action,
        ...event
      };
      w.dataLayer.push(dataLayerEvent);
    }
  }
};

// Predefined events
export const ANALYTICS_EVENTS = {
  PRICING_PAGE_VIEW: {
    action: 'pricing_page_view',
    category: 'Page Interaction',
    label: 'Pricing Page Viewed',
    nonInteraction: true
  },
  PRICING_PURCHASE_CLICK: {
    action: 'purchase_click',
    category: 'Conversion',
    label: 'Purchase Button Clicked',
    nonInteraction: false
  }
}; 