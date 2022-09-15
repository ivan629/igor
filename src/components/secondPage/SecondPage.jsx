import { Button, Col, Form, Input, Row } from "antd";
import * as React from 'react';

const VALIDATION = {
    '0a': {
        required: true,
        message: 'Input something!',
    },
};

const SecondPage = () => {
    const [form] = Form.useForm();

    const getFields = (key) => {
        const children = [];

        for (let i = 0; i < 1; i++) {
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

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
        >
            <Row >{getFields('a')}</Row>
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

export default SecondPage;
