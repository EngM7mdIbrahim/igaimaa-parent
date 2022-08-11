import { scaleFont } from "./mixins";


// FONT WEIGHT
export const FONT_WEIGHT_THIN = "200";
export const FONT_WEIGHT_REGULAR = "400";
export const FONT_WEIGHT_SEMI_BOLD= "500"
export const FONT_WEIGHT_BOLD = "700";

// FONT SIZE
export const FONT_SIZE_52 = scaleFont(52);
export const FONT_SIZE_32 = scaleFont(32);
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_16 = scaleFont(12);
export const FONT_SIZE_12 = scaleFont(12)

// LINE HEIGHT
export const LINE_HEIGHT_52 = scaleFont(54);
export const LINE_HEIGHT_24 = scaleFont(26);
export const LINE_HEIGHT_16 = scaleFont(18);
export const LINE_HEIGHT_12 = scaleFont(14);

// FONT STYLE
export const FONT_REGULAR = {
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontWeight: FONT_WEIGHT_BOLD,
};

export const FONT_SEMI_BOLD = {
  fontWeight: FONT_WEIGHT_SEMI_BOLD,
};

export const FONT_THIN = {
  fontWeight: FONT_WEIGHT_THIN,
}
