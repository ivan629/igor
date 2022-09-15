import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';

import './FirstPageForm.css';

const VALIDATION = {
    '0a': {
        required: true,
        message: 'Input something!',
    },
    '1a': {
        required: true,
        message: 'Input something!',
    },
    '0b': {
        required: true,
        message: 'Input something!',
    },
    '1b': {
        required: true,
        message: 'Input something!',
    },
    '0c': {
        required: true,
        message: 'Input something!',
    },
    '1c': {
        required: true,
        message: 'Input something!',
    },
    '0d': {
        required: true,
        message: 'Input something!',
    },
    '1d': {
        required: true,
        message: 'Input something!',
    },
};

const FirstPageForm = ({ step, onNext }) => {
    const [form] = Form.useForm();

    const getFields = (key) => {
        const children = [];

        for (let i = 0; i < 2; i++) {
            children.push(
                <Col key={i}>
                    <Form.Item
                        name={`field-${i} ${key}`}
                        label={`Field ${i} ${key}`}
                        rules={[
                            VALIDATION[`${i}${key}`],
                        ]}
                    >
                        <Input placeholder="placeholder" />
                    </Form.Item>
                </Col>,
            );
        }

        return children;
    };

    const onFinish = () => {
        onNext(step + 1);
    };

    return (
        <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
        >
            <Row >{getFields('a')}</Row>
            <Row >{getFields('b')}</Row>
            <Row >{getFields('c')}</Row>
            <Row >{getFields('d')}</Row>
            <Row>
                <Col
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        SUBMIT
                    </Button>
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => {
                            form.resetFields();
                        }}
                    >
                        CLEAR
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default FirstPageForm;
