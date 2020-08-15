import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text } from 'react-native';

import ReduxFormInput from '../../components/ReduxFormInput';

function MyForm() {
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <Text>Email</Text>
      <Field
        name={'email'}
        component={ReduxFormInput}
      />
    </ScrollView>
  );
}

export default reduxForm({ form: 'signUp' })(MyForm);