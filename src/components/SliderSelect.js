import React from "react";
import SliderComponent from "./common/SliderComponent";
import InputSlider from "./common/InputSlider";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 1000000;
  return (
    <div>
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            homeValue: value.toFixed(0),
            downPayment: (0.2 * value).toFixed(0),
            loanAmount: (0.8 * value).toFixed(0),
          });
        }}
        defaultValue={data.homeValue}
        min={50000}
        max={bank_limit}
        steps={10000}
        unit="$"
        amount={data.homeValue}
        label="Home Value"
        value={data.homeValue}
      />

      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value.toFixed(0),
            loanAmount: (data.homeValue - value).toFixed(0),
          })
        }
        defaultValue={data.downPayment}
        min={0}
        max={data.homeValue}
        steps={1000}
        unit="$"
        amount={data.downPayment}
        label="Down Payment"
        value={data.downPayment}
      />

      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: value.toFixed(0),
            downPayment: (data.homeValue - value).toFixed(0),
          })
        }
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        steps={1000}
        unit="$"
        amount={data.loanAmount}
        label="Loan Amount"
        value={data.loanAmount}
      />
      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
        defaultValue={data.interestRate}
        min={2}
        max={18}
        steps={0.5}
        unit="%"
        amount={data.interestRate}
        label="Interest Rate"
        value={data.interestRate}
      />

      <InputSlider
        className="rentSlider"
        onChange={(e, value) => {
          setData({
            ...data,
            monthlyRent: value,
          });
        }}
        onInputChange={(event, value) => {
          setData({
            ...data,
            monthlyRent:
              event.target.value === "" ? 0 : Number(event.target.value),
          });
        }}
        defaultValue={data.monthlyRent}
        min={0}
        max={5000}
        steps={100}
        unit="$"
        amount={data.monthlyRent}
        label="Monthly Rent"
        value={data.monthlyRent}
        color="warning"
      />
    </div>
  );
};

export default SliderSelect;
