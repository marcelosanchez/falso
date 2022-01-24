import { FakeOptions, fake, getRandomInRange } from './core/core';
import { data } from './food.json';
import { rand } from './rand';

export interface FoodOptions extends FakeOptions {
  origin?:
    | 'china'
    | 'italy'
    | 'india'
    | 'mexico'
    | 'japan'
    | 'france'
    | 'lebanon'
    | 'thailand'
    | 'greece'
    | 'turkey';
}

const totalOrigins = Object.keys(data)?.length;

/**
 * Generate a random food name.
 *
 * @category Food
 *
 * @example
 *
 * randFood()
 *
 * @example
 *
 * randFood({ origin: 'italy' })
 *
 * @example
 *
 * randFood({ length: 10 })
 *
 */
export function randFood<Options extends FoodOptions>(options?: Options) {
  const foodData: { [origin: string]: string[] } = data;
  const origin: string | undefined = options?.origin;

  if (!totalOrigins) {
    throw 'No foods found';
  }

  if (origin && !foodData[origin]) {
    throw 'No foods found for selected origin';
  }

  const factory: () => string = () => {
    if (origin) {
      return rand(foodData[origin]);
    }

    const originIndex = getRandomInRange({
      min: 0,
      max: totalOrigins - 1,
      fraction: 0,
    });
    const randomOrigin = Object.keys(foodData)[originIndex];

    return rand(foodData[randomOrigin]);
  };

  return fake(factory, options);
}