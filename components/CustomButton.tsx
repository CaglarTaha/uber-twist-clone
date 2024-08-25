import { ButtonProps } from "@/types/type";
import { Text, TouchableOpacity } from "react-native";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "primary":
      return "bg-primary-500";
    case "secondary":
      return "bg-secondary-500";
    case "danger":
      return "bg-danger-500";
    case "outline":
      return "bg-transparent border border-primary-500";
    case "success":
      return "bg-success-500";
    default:
      return "bg-primary-500";
  }
};
const getTextVariant = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-grray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};
const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-full flex flex-row justify-center p-3  items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)}  ${className}` }
        {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className={`text-bold ${getTextVariant(textVariant)}`}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
