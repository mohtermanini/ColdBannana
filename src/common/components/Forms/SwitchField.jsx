import React from 'react'

import { Form } from 'react-bootstrap'
import classNames from 'classnames'

export default function SwitchField({ name, activeLabel, inActiveLabel, methods, ...props }) {
    const { register, checked, watch } = methods;
    const value = watch(name);

    const switchClasses = classNames({
        'text-success': value,
        'text-danger': !value,
    })

    return (
        <Form.Check type="switch" defaultChecked={checked}
            label={value ? activeLabel : inActiveLabel}
            className={switchClasses}
            {...register(name)}
            {...props}
        />
    )
}
