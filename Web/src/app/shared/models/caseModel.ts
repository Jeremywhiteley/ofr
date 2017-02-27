export class Template {
    id:string;
    Name:string;
    Description:string;
    Layout:string;
    Fields:TemplateField[];
};

export class TemplateField {
    Name:string;
    Description:string;
    Type:string;
    Required:boolean;
    Options:Array<string>;   
};

export class CaseViewModel
{
    Template:Template;
    Data:any;
    IsDisplay:boolean;
    changeset:any;
}

export class Dashboard
{
    identity:string;
    regions:string[];
    roles:string[];
    cases:Case[];
}


export class OFRResponse
{
    Result:string;
    ErrorMessage:string[];
    Extra:any;
}

export class Case
{
  id: string;
  OCME: string;
  Status: string;
  Jurisdiction: string;
  UpdatedOn: string;
  Template: string;
  Data: any;
};

