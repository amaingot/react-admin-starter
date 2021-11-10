import * as React from "react";
import {
  Datagrid,
  DateField,
  TextField,
  List,
  ResourceComponentProps,
  Create,
  Edit,
  required,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Show,
  SimpleShowLayout,
  ReferenceManyField,
  ShowButton,
  EditButton,
} from "react-admin";

export const BlogList = (props: ResourceComponentProps) => (
  <List {...props}>
    <>
      <Datagrid>
        <TextField source="name" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </>
  </List>
);

export const BlogCreate = (props: ResourceComponentProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const BlogEdit = (props: ResourceComponentProps) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const PostList = (props: ResourceComponentProps) => (
  <List {...props}>
    <>
      <Datagrid>
        <TextField source="title" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </>
  </List>
);

export const PostShow = (props: ResourceComponentProps) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <ReferenceManyField
        label="Comments by"
        reference="comments"
        target="postID"
      >
        <CommentList />
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

export const PostCreate = (props: ResourceComponentProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <ReferenceInput label="Blog" source="blogID" reference="blogs">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const PostEdit = (props: ResourceComponentProps) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" validate={required()} />
      <ReferenceInput label="Blog" source="blogID" reference="blogs">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const CommentList = (props: ResourceComponentProps) => (
  <List {...props}>
    <>
      <Datagrid>
        <TextField source="name" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </>
  </List>
);

export const CommentCreate = (props: ResourceComponentProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="content" />
      <ReferenceInput label="Post" source="postID" reference="posts">
        <SelectInput optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const CommentEdit = (props: ResourceComponentProps) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="content" validate={required()} />
      <ReferenceInput label="Post" source="postID" reference="posts">
        <SelectInput optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
