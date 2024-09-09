import React from 'react'

import { Form } from 'react-bootstrap'
import { ErrorMessage } from '@hookform/error-message'
import StringUtils from '@/common/utils/StringUtils';
import DataTypesUtils from '@/common/utils/DataTypesUtils';

export default function DateField({ name, label, methods, groupClassName, ...props }) {
    const { register, formState: { errors }, watch } = methods;
    const { required, readOnly } = props;
    const value = watch(name);

    return (
        <Form.Group className={`text-start form-group ${groupClassName}`}>
            <Form.Label htmlFor={name}>{label} {required && <span className="tx-danger">*</span>}</Form.Label>
            {readOnly ? (
                !DataTypesUtils.isDefined(value) || StringUtils.isEmpty(value) ? "N/A" : value
            ) :
                (
                    <Form.Control
                        className={`form-control ${errors[name] ? 'invalid' : ''}`}
                        type="date"
                        {...register(name)}
                        {...props}
                    />
                )
            }
            <Form.Control.Feedback className="invalid-feedback">
                <ErrorMessage errors={errors} name={name} />
            </Form.Control.Feedback>
        </Form.Group>
    )
}
