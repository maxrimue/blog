import { describe, expect, test } from "vitest";
import { isPublished, sortByDateDesc } from "./posts";

describe("isPublished", () => {
	test("returns true when draft is false", () => {
		expect(isPublished({ draft: false, pubDate: new Date() })).toBe(true);
	});

	test("returns true when draft is undefined", () => {
		expect(isPublished({ pubDate: new Date() })).toBe(true);
	});

	test("returns false when draft is true", () => {
		expect(isPublished({ draft: true, pubDate: new Date() })).toBe(false);
	});
});

describe("sortByDateDesc", () => {
	test("sorts posts newest first", () => {
		const older = { data: { pubDate: new Date("2024-01-01") } };
		const newer = { data: { pubDate: new Date("2025-06-01") } };
		const result = sortByDateDesc([older, newer]);
		expect(result[0]).toBe(newer);
		expect(result[1]).toBe(older);
	});

	test("returns empty array for empty input", () => {
		expect(sortByDateDesc([])).toEqual([]);
	});

	test("does not mutate the original array", () => {
		const posts = [
			{ data: { pubDate: new Date("2025-01-01") } },
			{ data: { pubDate: new Date("2024-01-01") } },
		];
		const original = [...posts];
		sortByDateDesc(posts);
		expect(posts).toEqual(original);
	});
});
