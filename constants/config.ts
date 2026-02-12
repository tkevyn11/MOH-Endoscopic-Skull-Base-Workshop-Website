/**
 * Site-wide configuration flags
 * 
 * Update these flags to control various aspects of the workshop registration
 */

export const CONFIG = {
  /**
   * Set to true when dissector slots are full
   * This will:
   * - Show announcement banner on home page
   * - Mark dissector option as sold out in fees page
   * - Disable dissector registration CTAs
   * - Keep observer registration active
   */
  DISSECTOR_FULL: true,
} as const;
