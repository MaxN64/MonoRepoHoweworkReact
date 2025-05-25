
import { useForm } from 'react-hook-form';
import styles from './DynamicForm.module.css';

function DynamicForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const firstValue = watch('firstField', '');

  const onSubmit = data => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="firstField">First Field</label>
        <input
          id="firstField"
          {...register('firstField', {
            required: 'This field is required',
            minLength: { value: 6, message: 'Minimum length is 6' }
          })}
        />
        {errors.firstField && <p className={styles.error}>{errors.firstField.message}</p>}
      </div>

      {firstValue.length >= 6 && (
        <div className={styles.field}>
          <label htmlFor="secondField">Second Field</label>
          <input
            id="secondField"
            {...register('secondField', { required: 'This field is required' })}
          />
          {errors.secondField && <p className={styles.error}>{errors.secondField.message}</p>}
        </div>
      )}

      <button type="submit" className={styles.submit}>Submit</button>
    </form>
  );
}

export default DynamicForm;