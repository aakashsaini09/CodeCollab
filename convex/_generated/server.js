/* eslint-disable */
/**
 * @module
 */

import {
  actionGeneric,
  httpActionGeneric,
  queryGeneric,
  mutationGeneric,
  internalActionGeneric,
  internalMutationGeneric,
  internalQueryGeneric,
} from "convex/server";

/**
 * @param func {@link QueryCtx} 
 * @returns 
 */
export const query = queryGeneric;

/**
 * @param func {@link QueryCtx} 
 * @returns 
 */
export const internalQuery = internalQueryGeneric;

/**

 * @param func {@link MutationCtx} 
 * @returns 
 */
export const mutation = mutationGeneric;

/**

 * @param func {@link MutationCtx}
 * @returns 
 */
export const internalMutation = internalMutationGeneric;

/**
 {@link ActionCtx}.
 *
 * @param func  {@link ActionCtx}
 * @returns 
 */
export const action = actionGeneric;

/**
 * @param func {@link ActionCtx} 
 * @returns 
 */
export const internalAction = internalActionGeneric;

/**

 * @param func {@link ActionCtx} 
 * @returns
 */
export const httpAction = httpActionGeneric;
