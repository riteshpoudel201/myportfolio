import * as React from "react";

interface EmailTemplateProps {
  fullName: any;
  message:any
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,message
}) => (
  <div>
    <p><i>{message}</i></p>
    <h4>{fullName}!</h4>
  </div>
);

export default EmailTemplate;