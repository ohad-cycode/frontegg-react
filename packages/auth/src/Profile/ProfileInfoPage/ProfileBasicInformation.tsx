import React, { FC, useEffect } from 'react';
import { FButton, FInput, Grid, useT, FFormik } from '@frontegg/react-core';
import { useAuth } from '../../hooks';

const { useFormikContext } = FFormik;
export const ProfileBasicInformation: FC = () => {
  const { t } = useT();
  const { saving } = useAuth((state) => state.profileState);

  const formikContext = useFormikContext();
  useEffect(() => {
    formikContext.setSubmitting(saving ?? false);
  }, [saving]);
  return (
    <div className='fe-profile-basic-information'>
      <div className='fe-section-title fe-bold fe-mb-2'>{t('auth.profile.info.title2')}</div>

      <Grid container spacing={1}>
        <Grid item xs>
          <FInput name='name' label={t('auth.profile.info.user-name')} />
        </Grid>
        <Grid item xs>
          <FInput name='email' label={t('common.email')} disabled />
        </Grid>
        {/*<Grid item xs>*/}
        {/*  <FInput name='country' label={t('common.country')} />*/}
        {/*</Grid>*/}
        {/*<Grid item xs>*/}
        {/*  <FInput name='birthdate' label={t('common.date-of-birth')} />*/}
        {/*</Grid>*/}
        <Grid item xs={12}>
          <FButton variant='primary' type='submit' fullWidth={false} loading={saving}>
            Update Profile
          </FButton>
        </Grid>
      </Grid>
    </div>
  );
};
