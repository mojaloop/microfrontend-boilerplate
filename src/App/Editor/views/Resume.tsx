import React from 'react';
import { useSelector } from 'react-redux';
import { Field, Text } from 'components';
import { State } from 'store';
import './Resume.scss';

export default function Resume() {
  const { name, lastname, address } = useSelector((state: State) => state.editor);
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
