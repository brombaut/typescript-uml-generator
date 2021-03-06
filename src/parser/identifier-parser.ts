import Parsable from "./parsable";
import TokenPointer from "./token-pointer";
import Identifier from "../ast/identifier";
import Expression from "../ast/expression";

class IdentifierParser implements Parsable {
  private _tokenPointer: TokenPointer;

  constructor(tp: TokenPointer) {
    this._tokenPointer = tp;
  }

  public parse(): Expression {
    return new Identifier(
      this._tokenPointer.curToken(),
      this._tokenPointer.curTokenLiteral()
    );
  }
}

export default IdentifierParser;
