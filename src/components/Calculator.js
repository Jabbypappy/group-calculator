import classes from "./Calculator.module.css";

// Not currently in existence
import Card from "../UI/Card";
import Button from "../UI/Button";

// Not currently in existence
import InputField from "../UI/InputField";

const Calculator = () => {
  return (
    <Card>
      <InputField />
      <div className={classes.row}>
        <Button>clear</Button>
        <Button>%</Button>
        <Button>/</Button>
      </div>
      <div className={classes.row}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </div>
    </Card>
  );
};

export default Calculator;
