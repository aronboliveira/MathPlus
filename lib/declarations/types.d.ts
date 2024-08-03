export type cyclePhase = "mounted";
export type inpTypes =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";
export type voidish = null | undefined;
export type looseNum = string | number;
export type voidishStr = string | voidish;
export type voidishLooseNum = looseNum | voidish;
export type voidishEvTarg = EventTarget | voidish;
export type voidishNode = Node | voidish;
export type sizeableNode = Document | Element;
export type langSizeableNode = Document | HTMLElement;
export type nullishEl = Element | null;
export type voidishEl = nullishEl | undefined;
export type nullishHTMLEl = HTMLElement | null;
export type voidishHtmlEl = HTMLElement | voidish;
export type scopeNode = voidishHtmlEl | Document | DocumentFragment;
export type HTMLArticle = HTMLElement & {
  tagName: "ARTICLE";
};
export type HTMLFigure = HTMLElement & {
  tagName: "FIGURE";
};
export type HTMLFooter = HTMLElement & {
  tagName: "FOOTER";
};
export type HTMLHeader = HTMLElement & {
  tagName: "HEADER";
};
export type HTMLNav = HTMLElement & {
  tagName: "NAV";
};
export type HTMLSection = HTMLElement & {
  tagName: "SECTION";
};
export type HTMLMain = HTMLElement & {
  tagName: "MAIN";
};
export type nullishArt = HTMLArticle | null;
export type nullishFig = HTMLFigure | null;
export type nullishHeader = HTMLHeader | null;
export type nullishFooter = HTMLFooter | null;
export type nullishDiv = HTMLDivElement | null;
export type nullishNav = HTMLNav | null;
export type nullishSect = HTMLSection | null;
export type nullishMain = HTMLMain | null;
export type nullishInp = HTMLInputElement | null;
export type voidishInp = nullishInp | undefined;
export type inputLikeEl = HTMLInputElement | HTMLTextAreaElement;
export type entryEl = inputLikeEl | HTMLSelectElement;
export type voidishInpLikeEl = inputLikeEl | voidish;
export type voidishEntryEl = entryEl | voidish;
export type nullishBtn = HTMLButtonElement | null;
export type voidishBtn = nullishBtn | undefined;
export type nullishSpan = HTMLSpanElement | null;
export type nullishDlg = HTMLDialogElement | null;
export type nullishMenu = HTMLMenuElement | null;
export type nullishLi = HTMLLIElement | null;
export type nullishForm = HTMLFormElement | null;
export type nullishImg = HTMLImageElement | null;
export type nullishAnchor = HTMLAnchorElement | null;
export type nullishSvg = SVGElement | null;
export type listableEl = HTMLSelectElement | HTMLDataListElement;
export type voidishSvg = SVGElement | voidish;
export type voidishJsx = JSX.Element | undefined | null;
export type voidishJSXAr = JSX.Element[] | JSX.Element | null | undefined;
export type funcVoidishJsx = () => voidishJsx;
export type validImgExntesions =
  | "jpeg"
  | "jpg"
  | "png"
  | "gif"
  | "svg"
  | "webp"
  | "bmp"
  | "ico"
  | "tiff"
  | "heif"
  | "avif"
  | "pdf"
  | "invalidExtension";
export type numSets = "whole" | "natural" | "integer" | "rational" | "real";
export type spinnerAnimationClasses = "spinner-border" | "spinner-grow";
export type spinnerColorClasses =
  | "text-danger"
  | "text-primary"
  | "text-secondary"
  | "text-success"
  | "text-warning"
  | "text-info"
  | "text-light"
  | "text-dark"
  | "";
export type socialMedia =
  | "discord"
  | "instagram"
  | "facebook"
  | "twitter"
  | "youtube"
  | "twitch";
export type mainFooterCases =
  | "authors"
  | "contact"
  | "cookies"
  | "team"
  | "terms";
export type pagesCases = "home" | "new-user" | "active-user" | "classes" | "/";
export type FourNumCases = 0 | 1 | 2 | 3;
export type urlCases =
  | "Algebra"
  | "Statistics"
  | "Probability"
  | "Combinatorics"
  | "Trigonometry"
  | "Geometry"
  | "";
export type AlgebraFormulaNamesReg =
  | "Linear Formula"
  | "Discriminant"
  | "Number of Roots"
  | "Quadratic Formula"
  | "Cubic Formula"
  | "Difference of Squares"
  | "Binomial Theorem"
  | "Least Common Multiple"
  | "Greatest Common Divisor"
  | "Common Difference of Arithmetic Series"
  | "Sum of Arithmetic Series"
  | "Common Difference of Geometric Series"
  | "Sum of Geometric Series";
export type algebraFormulaNames =
  | "linearFormula"
  | "discriminant"
  | "numberOfRoots"
  | "quadraticFormula"
  | "cubicFormula"
  | "differenceOfSquares"
  | "binominalTheorem"
  | "leastCommonMultiple"
  | "greatestCommonDivisor"
  | "commonDifferenceOfArithmeticSeries"
  | "sumOfArithmeticSeries"
  | "commonDifferenceOfGeometricSeries"
  | "sumOfGeometricSeries";
export type CombinatoricsFormulasNamesReg =
  | "Permutation"
  | "MultisetPermutation";
export type combinatoricsFormulaNames = "permutation" | "multisetPermutation";
export type CombinationsTypesReg =
  | "Permutation Without Repetition"
  | "Circular Permutation"
  | "Distinct Permutation Without Repetition"
  | "Distinct Permutation with Repetition"
  | "Combination Without Repetition"
  | "Combination with Repetition";
export type combinationsTypes =
  | "permutationWithoutRepetition"
  | "circularPermutation"
  | "distinctPermutationWithoutRepetition"
  | "distinctPermutationWithRepetition"
  | "combinationWithoutRepetition"
  | "combinationWithRepetition";
export type StatisticsFormulaNamesReg =
  | "Arithmetic Mean"
  | "Harmonic Mean"
  | "Geometric Mean"
  | "Median"
  | "Mode"
  | "Arithmetic Variance"
  | "Geometric Variance"
  | "Covariance"
  | "Arithmetic Standard Deviation"
  | "Geometric Standard Deviation"
  | "Coefficient of Correlation";
export type statisticsFormulaNames =
  | "arithmeticMean"
  | "harmonicMean"
  | "geometricMean"
  | "median"
  | "mode"
  | "arithmeticVariance"
  | "geometricVariance"
  | "covariance"
  | "arithmeticStandardDeviation"
  | "geometricStandardDeviation"
  | "coefficientOfCorrelation";
export type TrigonometryFormulaNamesReg =
  | "Sine"
  | "Cosine"
  | "Tangent"
  | "Secant"
  | "Cosecant"
  | "Cotangent"
  | "Sine Angle"
  | "Cosine Angle"
  | "Tangent Angle"
  | "Hyperbolic Sine"
  | "Hyperbolic Cosine"
  | "Hyperbolic Tangent"
  | "Angle of Hyperbolic Sine"
  | "Angle of Hyperbolic Cosine"
  | "Angle of Hyperbolic Tangent"
  | "Point of Tangent Angle"
  | "Hypotenuse"
  | "Triangle Legs"
  | "Sine As Cofunction"
  | "Cosine As Cofunction"
  | "Tangent As Cofunction"
  | "Secant As Cofunction"
  | "Cotangent As Cofunction"
  | "Sine with Pythagorean Identity"
  | "Cosine with Pythagorean Identity"
  | "Tangent with Pythagorean Identity"
  | "Secant with Pythagorean Identity"
  | "Cotangent with Pythagorean Identity"
  | "Cosecant with Pythagorean Identity"
  | "Law of Sines"
  | "Law of Cosines"
  | "Halved Angled Sine"
  | "Halved Angled Cosine"
  | "Halved Angle Tangent"
  | "Double Angled Sine"
  | "Double Angled Cosine"
  | "Double Angled Tangent"
  | "Triple Angled Sine"
  | "Triple Angled Cosine"
  | "Triple Angled Tangent"
  | "Sine for United Angles"
  | "Sine for Added Angles"
  | "Sine for Subtracted Angles"
  | "Cosine for United Angles"
  | "Cosine for Added Angles"
  | "Cosine for Subtracted Angles"
  | "Tangent for United Angles"
  | "Tangent for Added Angles"
  | "Tangent for Subtracted Angles";
export type trigonometryFormulaNames =
  | "sine"
  | "cosine"
  | "tangent"
  | "secant"
  | "cosecant"
  | "contangent"
  | "sineAngle"
  | "cosineAngle"
  | "tangentAngle"
  | "hyperbolicSine"
  | "hyperbolicCosine"
  | "hyperbolicTangent"
  | "angleOfHyperbolicSine"
  | "angleOfHyperbolicCosine"
  | "angleOfHyperbolicTangent"
  | "pointOfTangentAngle"
  | "hypotenuse"
  | "triangleLegs"
  | "sineAsCofunction"
  | "cosineAsCofunction"
  | "tangentAsCofunction"
  | "secantAsCofunction"
  | "secantAsCofunction"
  | "cotangentAsCofunction"
  | "sineWithPythagoreanIdentity"
  | "cosineWithPythagoreanIdentity"
  | "tangentWithPythagoreanIdentity"
  | "secantWithPythagoreanIdentity"
  | "cotangentWithPythagoreanIdentity"
  | "cosecantWithPythagoreanIdentity"
  | "lawOfSines"
  | "lawOfCosines"
  | "halvedAngledSine"
  | "halvedAngledCosine"
  | "halvedAngleTangent"
  | "doubleAngledSine"
  | "doubleAngledCosine"
  | "doubleAngledTangent"
  | "tripleAngledSine"
  | "tripleAngledCosine"
  | "tripleAngledTangent"
  | "sineForUnitedAngles"
  | "sineForAddedAngles"
  | "sineForSubtractedAngles"
  | "cosineForUnitedAngles"
  | "cosineForAddedAngles"
  | "cosineForSubtractedAngles"
  | "tangentForUnitedAngles"
  | "tangentForAddedAngles"
  | "tangentForSubtractedAngles";
