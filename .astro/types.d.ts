declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"components": {
"panda/accordion.mdx": {
	id: "panda/accordion.mdx";
  slug: "panda/accordion";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/alert.mdx": {
	id: "panda/alert.mdx";
  slug: "panda/alert";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/avatar.mdx": {
	id: "panda/avatar.mdx";
  slug: "panda/avatar";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/badge.mdx": {
	id: "panda/badge.mdx";
  slug: "panda/badge";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/button.mdx": {
	id: "panda/button.mdx";
  slug: "panda/button";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/card.mdx": {
	id: "panda/card.mdx";
  slug: "panda/card";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/carousel.mdx": {
	id: "panda/carousel.mdx";
  slug: "panda/carousel";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/checkbox.mdx": {
	id: "panda/checkbox.mdx";
  slug: "panda/checkbox";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/clipboard.mdx": {
	id: "panda/clipboard.mdx";
  slug: "panda/clipboard";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/code.mdx": {
	id: "panda/code.mdx";
  slug: "panda/code";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/collapsible.mdx": {
	id: "panda/collapsible.mdx";
  slug: "panda/collapsible";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/color-picker.mdx": {
	id: "panda/color-picker.mdx";
  slug: "panda/color-picker";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/combobox.mdx": {
	id: "panda/combobox.mdx";
  slug: "panda/combobox";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/date-picker.mdx": {
	id: "panda/date-picker.mdx";
  slug: "panda/date-picker";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/dialog.mdx": {
	id: "panda/dialog.mdx";
  slug: "panda/dialog";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/drawer.mdx": {
	id: "panda/drawer.mdx";
  slug: "panda/drawer";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/editable.mdx": {
	id: "panda/editable.mdx";
  slug: "panda/editable";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/file-upload.mdx": {
	id: "panda/file-upload.mdx";
  slug: "panda/file-upload";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/form-label.mdx": {
	id: "panda/form-label.mdx";
  slug: "panda/form-label";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/heading.mdx": {
	id: "panda/heading.mdx";
  slug: "panda/heading";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/hover-card.mdx": {
	id: "panda/hover-card.mdx";
  slug: "panda/hover-card";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/icon-button.mdx": {
	id: "panda/icon-button.mdx";
  slug: "panda/icon-button";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/icon.mdx": {
	id: "panda/icon.mdx";
  slug: "panda/icon";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/input.mdx": {
	id: "panda/input.mdx";
  slug: "panda/input";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/kbd.mdx": {
	id: "panda/kbd.mdx";
  slug: "panda/kbd";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/link.mdx": {
	id: "panda/link.mdx";
  slug: "panda/link";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/menu.mdx": {
	id: "panda/menu.mdx";
  slug: "panda/menu";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/number-input.mdx": {
	id: "panda/number-input.mdx";
  slug: "panda/number-input";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/pagination.mdx": {
	id: "panda/pagination.mdx";
  slug: "panda/pagination";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/pin-input.mdx": {
	id: "panda/pin-input.mdx";
  slug: "panda/pin-input";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/popover.mdx": {
	id: "panda/popover.mdx";
  slug: "panda/popover";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/progress.mdx": {
	id: "panda/progress.mdx";
  slug: "panda/progress";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/radio-button-group.mdx": {
	id: "panda/radio-button-group.mdx";
  slug: "panda/radio-button-group";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/radio-group.mdx": {
	id: "panda/radio-group.mdx";
  slug: "panda/radio-group";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/rating-group.mdx": {
	id: "panda/rating-group.mdx";
  slug: "panda/rating-group";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/segment-group.mdx": {
	id: "panda/segment-group.mdx";
  slug: "panda/segment-group";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/select.mdx": {
	id: "panda/select.mdx";
  slug: "panda/select";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/skeleton.mdx": {
	id: "panda/skeleton.mdx";
  slug: "panda/skeleton";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/slider.mdx": {
	id: "panda/slider.mdx";
  slug: "panda/slider";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/splitter.mdx": {
	id: "panda/splitter.mdx";
  slug: "panda/splitter";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/switch.mdx": {
	id: "panda/switch.mdx";
  slug: "panda/switch";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/table.mdx": {
	id: "panda/table.mdx";
  slug: "panda/table";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/tabs.mdx": {
	id: "panda/tabs.mdx";
  slug: "panda/tabs";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/tags-input.mdx": {
	id: "panda/tags-input.mdx";
  slug: "panda/tags-input";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/text.mdx": {
	id: "panda/text.mdx";
  slug: "panda/text";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/textarea.mdx": {
	id: "panda/textarea.mdx";
  slug: "panda/textarea";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/toast.mdx": {
	id: "panda/toast.mdx";
  slug: "panda/toast";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/toggle-group.mdx": {
	id: "panda/toggle-group.mdx";
  slug: "panda/toggle-group";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/tooltip.mdx": {
	id: "panda/tooltip.mdx";
  slug: "panda/tooltip";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"panda/tree-view.mdx": {
	id: "panda/tree-view.mdx";
  slug: "panda/tree-view";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/accordion.mdx": {
	id: "tailwind/accordion.mdx";
  slug: "tailwind/accordion";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/alert.mdx": {
	id: "tailwind/alert.mdx";
  slug: "tailwind/alert";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/avatar.mdx": {
	id: "tailwind/avatar.mdx";
  slug: "tailwind/avatar";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/badge.mdx": {
	id: "tailwind/badge.mdx";
  slug: "tailwind/badge";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/button.mdx": {
	id: "tailwind/button.mdx";
  slug: "tailwind/button";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/card.mdx": {
	id: "tailwind/card.mdx";
  slug: "tailwind/card";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/carousel.mdx": {
	id: "tailwind/carousel.mdx";
  slug: "tailwind/carousel";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/checkbox.mdx": {
	id: "tailwind/checkbox.mdx";
  slug: "tailwind/checkbox";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/code.mdx": {
	id: "tailwind/code.mdx";
  slug: "tailwind/code";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/collapsible.mdx": {
	id: "tailwind/collapsible.mdx";
  slug: "tailwind/collapsible";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/color-picker.mdx": {
	id: "tailwind/color-picker.mdx";
  slug: "tailwind/color-picker";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/combobox.mdx": {
	id: "tailwind/combobox.mdx";
  slug: "tailwind/combobox";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/date-picker.mdx": {
	id: "tailwind/date-picker.mdx";
  slug: "tailwind/date-picker";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/dialog.mdx": {
	id: "tailwind/dialog.mdx";
  slug: "tailwind/dialog";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/drawer.mdx": {
	id: "tailwind/drawer.mdx";
  slug: "tailwind/drawer";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/editable.mdx": {
	id: "tailwind/editable.mdx";
  slug: "tailwind/editable";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/file-upload.mdx": {
	id: "tailwind/file-upload.mdx";
  slug: "tailwind/file-upload";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/form-label.mdx": {
	id: "tailwind/form-label.mdx";
  slug: "tailwind/form-label";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/heading.mdx": {
	id: "tailwind/heading.mdx";
  slug: "tailwind/heading";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/hover-card.mdx": {
	id: "tailwind/hover-card.mdx";
  slug: "tailwind/hover-card";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/icon.mdx": {
	id: "tailwind/icon.mdx";
  slug: "tailwind/icon";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/input.mdx": {
	id: "tailwind/input.mdx";
  slug: "tailwind/input";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/kbd.mdx": {
	id: "tailwind/kbd.mdx";
  slug: "tailwind/kbd";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/menu.mdx": {
	id: "tailwind/menu.mdx";
  slug: "tailwind/menu";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/number-input.mdx": {
	id: "tailwind/number-input.mdx";
  slug: "tailwind/number-input";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/pagination.mdx": {
	id: "tailwind/pagination.mdx";
  slug: "tailwind/pagination";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/pin-input.mdx": {
	id: "tailwind/pin-input.mdx";
  slug: "tailwind/pin-input";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/popover.mdx": {
	id: "tailwind/popover.mdx";
  slug: "tailwind/popover";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/radio-button-group.mdx": {
	id: "tailwind/radio-button-group.mdx";
  slug: "tailwind/radio-button-group";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/radio-group.mdx": {
	id: "tailwind/radio-group.mdx";
  slug: "tailwind/radio-group";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/rating-group.mdx": {
	id: "tailwind/rating-group.mdx";
  slug: "tailwind/rating-group";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/segment-group.mdx": {
	id: "tailwind/segment-group.mdx";
  slug: "tailwind/segment-group";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/select.mdx": {
	id: "tailwind/select.mdx";
  slug: "tailwind/select";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/skeleton.mdx": {
	id: "tailwind/skeleton.mdx";
  slug: "tailwind/skeleton";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/slider.mdx": {
	id: "tailwind/slider.mdx";
  slug: "tailwind/slider";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/splitter.mdx": {
	id: "tailwind/splitter.mdx";
  slug: "tailwind/splitter";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/switch.mdx": {
	id: "tailwind/switch.mdx";
  slug: "tailwind/switch";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/table.mdx": {
	id: "tailwind/table.mdx";
  slug: "tailwind/table";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/tabs.mdx": {
	id: "tailwind/tabs.mdx";
  slug: "tailwind/tabs";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/tags-input.mdx": {
	id: "tailwind/tags-input.mdx";
  slug: "tailwind/tags-input";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/text.mdx": {
	id: "tailwind/text.mdx";
  slug: "tailwind/text";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/textarea.mdx": {
	id: "tailwind/textarea.mdx";
  slug: "tailwind/textarea";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/toast.mdx": {
	id: "tailwind/toast.mdx";
  slug: "tailwind/toast";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/toggle-group.mdx": {
	id: "tailwind/toggle-group.mdx";
  slug: "tailwind/toggle-group";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
"tailwind/tooltip.mdx": {
	id: "tailwind/tooltip.mdx";
  slug: "tailwind/tooltip";
  body: string;
  collection: "components";
  data: InferEntrySchema<"components">
} & { render(): Render[".mdx"] };
};
"overview": {
"panda/about.mdx": {
	id: "panda/about.mdx";
  slug: "panda/about";
  body: string;
  collection: "overview";
  data: InferEntrySchema<"overview">
} & { render(): Render[".mdx"] };
"panda/changelog.mdx": {
	id: "panda/changelog.mdx";
  slug: "panda/changelog";
  body: string;
  collection: "overview";
  data: InferEntrySchema<"overview">
} & { render(): Render[".mdx"] };
"panda/figma.mdx": {
	id: "panda/figma.mdx";
  slug: "panda/figma";
  body: string;
  collection: "overview";
  data: InferEntrySchema<"overview">
} & { render(): Render[".mdx"] };
"panda/getting-started.mdx": {
	id: "panda/getting-started.mdx";
  slug: "panda/getting-started";
  body: string;
  collection: "overview";
  data: InferEntrySchema<"overview">
} & { render(): Render[".mdx"] };
"panda/introduction.mdx": {
	id: "panda/introduction.mdx";
  slug: "panda/introduction";
  body: string;
  collection: "overview";
  data: InferEntrySchema<"overview">
} & { render(): Render[".mdx"] };
"tailwind/about.mdx": {
	id: "tailwind/about.mdx";
  slug: "tailwind/about";
  body: string;
  collection: "overview";
  data: InferEntrySchema<"overview">
} & { render(): Render[".mdx"] };
"tailwind/changelog.mdx": {
	id: "tailwind/changelog.mdx";
  slug: "tailwind/changelog";
  body: string;
  collection: "overview";
  data: InferEntrySchema<"overview">
} & { render(): Render[".mdx"] };
"tailwind/figma.mdx": {
	id: "tailwind/figma.mdx";
  slug: "tailwind/figma";
  body: string;
  collection: "overview";
  data: InferEntrySchema<"overview">
} & { render(): Render[".mdx"] };
"tailwind/getting-started.mdx": {
	id: "tailwind/getting-started.mdx";
  slug: "tailwind/getting-started";
  body: string;
  collection: "overview";
  data: InferEntrySchema<"overview">
} & { render(): Render[".mdx"] };
"tailwind/introduction.mdx": {
	id: "tailwind/introduction.mdx";
  slug: "tailwind/introduction";
  body: string;
  collection: "overview";
  data: InferEntrySchema<"overview">
} & { render(): Render[".mdx"] };
};
"theme": {
"panda/colors.mdx": {
	id: "panda/colors.mdx";
  slug: "panda/colors";
  body: string;
  collection: "theme";
  data: any
} & { render(): Render[".mdx"] };
"panda/customize.mdx": {
	id: "panda/customize.mdx";
  slug: "panda/customize";
  body: string;
  collection: "theme";
  data: any
} & { render(): Render[".mdx"] };
"panda/semantic-tokens.mdx": {
	id: "panda/semantic-tokens.mdx";
  slug: "panda/semantic-tokens";
  body: string;
  collection: "theme";
  data: any
} & { render(): Render[".mdx"] };
"tailwind/colors.mdx": {
	id: "tailwind/colors.mdx";
  slug: "tailwind/colors";
  body: string;
  collection: "theme";
  data: any
} & { render(): Render[".mdx"] };
"tailwind/customize.mdx": {
	id: "tailwind/customize.mdx";
  slug: "tailwind/customize";
  body: string;
  collection: "theme";
  data: any
} & { render(): Render[".mdx"] };
"tailwind/semantic-tokens.mdx": {
	id: "tailwind/semantic-tokens.mdx";
  slug: "tailwind/semantic-tokens";
  body: string;
  collection: "theme";
  data: any
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		"props": {
"accordion": {
	id: "accordion";
  collection: "props";
  data: InferEntrySchema<"props">
};
"alert": {
	id: "alert";
  collection: "props";
  data: InferEntrySchema<"props">
};
"avatar": {
	id: "avatar";
  collection: "props";
  data: InferEntrySchema<"props">
};
"badge": {
	id: "badge";
  collection: "props";
  data: InferEntrySchema<"props">
};
"button": {
	id: "button";
  collection: "props";
  data: InferEntrySchema<"props">
};
"card": {
	id: "card";
  collection: "props";
  data: InferEntrySchema<"props">
};
"carousel": {
	id: "carousel";
  collection: "props";
  data: InferEntrySchema<"props">
};
"checkbox": {
	id: "checkbox";
  collection: "props";
  data: InferEntrySchema<"props">
};
"code": {
	id: "code";
  collection: "props";
  data: InferEntrySchema<"props">
};
"color-picker": {
	id: "color-picker";
  collection: "props";
  data: InferEntrySchema<"props">
};
"combobox": {
	id: "combobox";
  collection: "props";
  data: InferEntrySchema<"props">
};
"date-picker": {
	id: "date-picker";
  collection: "props";
  data: InferEntrySchema<"props">
};
"dialog": {
	id: "dialog";
  collection: "props";
  data: InferEntrySchema<"props">
};
"drawer": {
	id: "drawer";
  collection: "props";
  data: InferEntrySchema<"props">
};
"editable": {
	id: "editable";
  collection: "props";
  data: InferEntrySchema<"props">
};
"file-upload": {
	id: "file-upload";
  collection: "props";
  data: InferEntrySchema<"props">
};
"form-label": {
	id: "form-label";
  collection: "props";
  data: InferEntrySchema<"props">
};
"hover-card": {
	id: "hover-card";
  collection: "props";
  data: InferEntrySchema<"props">
};
"icon": {
	id: "icon";
  collection: "props";
  data: InferEntrySchema<"props">
};
"icon-button": {
	id: "icon-button";
  collection: "props";
  data: InferEntrySchema<"props">
};
"input": {
	id: "input";
  collection: "props";
  data: InferEntrySchema<"props">
};
"kbd": {
	id: "kbd";
  collection: "props";
  data: InferEntrySchema<"props">
};
"menu": {
	id: "menu";
  collection: "props";
  data: InferEntrySchema<"props">
};
"number-input": {
	id: "number-input";
  collection: "props";
  data: InferEntrySchema<"props">
};
"pagination": {
	id: "pagination";
  collection: "props";
  data: InferEntrySchema<"props">
};
"pin-input": {
	id: "pin-input";
  collection: "props";
  data: InferEntrySchema<"props">
};
"popover": {
	id: "popover";
  collection: "props";
  data: InferEntrySchema<"props">
};
"progress": {
	id: "progress";
  collection: "props";
  data: InferEntrySchema<"props">
};
"radio-button-group": {
	id: "radio-button-group";
  collection: "props";
  data: InferEntrySchema<"props">
};
"radio-group": {
	id: "radio-group";
  collection: "props";
  data: InferEntrySchema<"props">
};
"rating-group": {
	id: "rating-group";
  collection: "props";
  data: InferEntrySchema<"props">
};
"segment-group": {
	id: "segment-group";
  collection: "props";
  data: InferEntrySchema<"props">
};
"select": {
	id: "select";
  collection: "props";
  data: InferEntrySchema<"props">
};
"skeleton": {
	id: "skeleton";
  collection: "props";
  data: InferEntrySchema<"props">
};
"slider": {
	id: "slider";
  collection: "props";
  data: InferEntrySchema<"props">
};
"splitter": {
	id: "splitter";
  collection: "props";
  data: InferEntrySchema<"props">
};
"switch": {
	id: "switch";
  collection: "props";
  data: InferEntrySchema<"props">
};
"table": {
	id: "table";
  collection: "props";
  data: InferEntrySchema<"props">
};
"tabs": {
	id: "tabs";
  collection: "props";
  data: InferEntrySchema<"props">
};
"tags-input": {
	id: "tags-input";
  collection: "props";
  data: InferEntrySchema<"props">
};
"textarea": {
	id: "textarea";
  collection: "props";
  data: InferEntrySchema<"props">
};
"toast": {
	id: "toast";
  collection: "props";
  data: InferEntrySchema<"props">
};
"toggle-group": {
	id: "toggle-group";
  collection: "props";
  data: InferEntrySchema<"props">
};
"tooltip": {
	id: "tooltip";
  collection: "props";
  data: InferEntrySchema<"props">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
