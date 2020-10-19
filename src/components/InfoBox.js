import React from 'react';
import { Card, CardContent, Typograpghy } from "@material-ui/core";

function InfoBox({ title, cases, total  }) {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typograpghy className="infoBox__title" color="textSecondary">
          {title}
        </Typograpghy>

        <h2 className="infoBox__cases">{cases}</h2>

        <Typograpghy className="infoBox__total" color="textSecondary">
          {total} Total
        </Typograpghy>
      </CardContent>
    </Card>
  )
}

export default InfoBox;
