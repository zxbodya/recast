import * as ESTree from "estree";
import {ParseOptions, Program} from "esprima";

/**
 * "esprima" module augmentations.
 */
declare module "esprima" {
  export function parse(input: string, config?: ParseOptions, delegate?: (node: ESTree.Node, meta: any) => void): Program;
}
