import { sendGAEvent } from '@next/third-parties/google'
import posthog from 'posthog-js'

export const trackCTA = (ctaName: string, location: string) => {
    // Track to Google Analytics
    sendGAEvent('event', 'cta_click', {
        cta_name: ctaName,
        location: location,
    })

    // Track to PostHog
    posthog.capture('cta_clicked', {
        cta_name: ctaName,
        location: location,
    })
}
