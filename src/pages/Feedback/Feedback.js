import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Feedback.scss';
import { fireEvent } from '@testing-library/react';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const Feedback = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });
  
    const onSubmit = (data) => {
      console.log(data);
    };

    return (
        <div className="feedback-container">
          <h1>Send Feedback</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} placeholder="Name" className={errors.name ? 'error-input' : ''} />
            <p className="error-message">{errors.name?.message}</p>
    
            <input {...register('email')} placeholder="Email" className={errors.email ? 'error-input' : ''} />
            <p className="error-message">{errors.email?.message}</p>
    
            <textarea {...register('message')} placeholder="Message" className={errors.message ? 'error-input' : ''} />
            <p className="error-message">{errors.message?.message}</p>
    
            <button type="submit" className="send-btn">Send</button>
          </form>
        </div>
      );
    };

export default Feedback;
