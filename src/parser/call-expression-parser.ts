import Parsable from "./parsable";
import TokenPointer from "./token-pointer";
import Expression from "../ast/expression";
import Token from "../token/token";
import CallExpression from "../ast/call-expression";
import TokenType from "../token/token-type";
import ExpressionListParser from "./expression-list-parser";

class CallExpressionParser implements Parsable {
  private _tokenPointer: TokenPointer;
  private _func: Expression;

  constructor(tp: TokenPointer, func: Expression) {
    this._tokenPointer = tp;
    this._func = func;
  }

  public parse(): Expression {
    const localToken: Token = this._tokenPointer.curToken();
    const elp: ExpressionListParser = new ExpressionListParser(
      this._tokenPointer,
      TokenType.RPAREN
    );
    const args: Expression[] = elp.parse();
    return new CallExpression(localToken, this._func, args);
  }
}

export default CallExpressionParser;
