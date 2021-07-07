import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/formDataSlice";
import { Button } from "../index";
import { Form, Label, Input, CheckBoxWrapper } from "../../styles/Forms";
import { useSteps } from "../../hooks/useSteps";
import { useEffect, useState } from "react";

export const AreasForm = () => {
  const [isValid, setValid] = useState(false);
  const [options, setOptions] = useState<any>([]);
  const { register, handleSubmit } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const { goToNextStep, configurations } = useSteps();

  useEffect(() => {
    configurations.map((config) => {
      if (config.name === "areas" && config.options) {
        setOptions(config.options);
      }
    });
  }, []);

  const handlerValidation = () => {
    setValid(false);
    const optionsChecked = options.filter((option: any) => {
      const checkBox = document.getElementsByName(option.id) as any;
      return checkBox[0].checked;
    });

    if (optionsChecked.length) {
      setValid(true);
    }
    return true;
  };

  const getValuesTrutly = (values: any) => {
    const keys = Object.keys(values);
    return keys.filter((keys) => values[keys]);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    const valuesSelected = getValuesTrutly(data);
    const value = valuesSelected;
    const stepName = "areas";
    dispatch(add({ value, stepName }));
    goToNextStep();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>Seleccion las Areas de tu inmueble</Label>
      {options.map((option: any) => (
        <>
          <Label>{option.name}</Label>
          <Input
            key={option.id}
            type="checkbox"
            {...register(option.id, { validate: handlerValidation })}
          />
        </>
      ))}

      <Button
        disabled={!isValid}
        type="submit"
        label="Siguiente"
        onClick={handleSubmit(onSubmit)}
      />
    </Form>
  );
};
