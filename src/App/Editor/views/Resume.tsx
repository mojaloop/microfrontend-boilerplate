import React from 'react';
import { Column, Field, Text } from 'components';
import editorConnector, { EditorProps } from '../connectors';
import './Resume.scss';

function Resume({ name, lastname, address }: EditorProps) {
  return (
    <Column className="resume__column">
      <Field className="resume__field" kind="dark">
        {name || (
          <Text light size="medium">
            name unset
          </Text>
        )}
      </Field>
      <Field className="resume__field" kind="dark">
        {lastname || (
          <Text light size="medium">
            lastname unset
          </Text>
        )}
      </Field>
      <Field className="resume__field" kind="dark">
        {address || (
          <Text light size="medium">
            address unset
          </Text>
        )}
      </Field>
    </Column>
  );
}

export default editorConnector(Resume);
