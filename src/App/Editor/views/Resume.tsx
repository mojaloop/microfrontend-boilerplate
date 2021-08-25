import React from 'react';
import { Field, Text } from 'components';
import './Resume.scss';
import editorConnector, { EditorProps } from '../connectors';

function Resume({ name, lastname, address }: EditorProps) {
  return (
    <div>
      <Field className="resume__field" size="small" kind="dark">
        {name || (
          <Text light size="small">
            name unset
          </Text>
        )}
      </Field>
      <Field className="resume__field" size="small" kind="dark">
        {lastname || (
          <Text light size="small">
            lastname unset
          </Text>
        )}
      </Field>
      <Field className="resume__field" size="small" kind="dark">
        {address || (
          <Text light size="small">
            address unset
          </Text>
        )}
      </Field>
    </div>
  );
}

export default editorConnector(Resume);
