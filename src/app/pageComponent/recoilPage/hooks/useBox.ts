import mem from "mem";
import { atom, selector } from "recoil";

export const boxIdsState = atom({
  key: "boxIdsState",
  default: [] as string[],
});

export const getBoxState = mem((id: string) =>
  atom({
    key: `boxState${id}`,
    default: { x: 100, y: 100 },
  })
);

export const totalsState = selector({
  key: "totalsState",
  get: ({ get }) => {
    const boxIds = get(boxIdsState);
    return boxIds.length;
  },
});

export const boundingState = selector({
  key: "boundingState",
  get: ({ get }) => {
    const boxIds = get(boxIdsState);
    const boxes = boxIds.map((id) => get(getBoxState(id)));

    const bounding = boxes.reduce(
      (acc, box) => {
        if (acc.minX === null || box.x < acc.minX) acc.minX = box.x;
        if (acc.minY === null || box.y < acc.minY) acc.minY = box.y;
        if (acc.maxX === null || box.x > acc.maxX) acc.maxX = box.x;
        if (acc.maxY === null || box.y > acc.maxY) acc.maxY = box.y;
        return acc;
      },
      { minX: null, minY: null, maxX: null, maxY: null } as {
        minX: number | null;
        minY: number | null;
        maxX: number | null;
        maxY: number | null;
      }
    );

    return bounding;
  },
});
