import Resource from "@/ts/Resource"
import Enumeration from "./Enumeration"


var CommonFn: any = CommonFn || {

};

CommonFn.GetEnumValue = (data: number, enumName: string): string => {
  let enumeration = Enumeration[enumName],
    resource = Resource[enumName];

  for (let propName in enumeration) {
    if (enumeration[propName] == data) {
      return resource[propName];
    }
  }

  return '';
}

export default CommonFn;

