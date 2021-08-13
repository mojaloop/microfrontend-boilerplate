import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import requestState from '@modusbox/redux-utils/lib/reducers/request';
import { EditorState } from './types';

export const initialState: EditorState = {
  // posts: requestState({ initialData: [], clearData: false }),
  name: '',
  lastname: '',
  address: '',
  submitPending: false,
  submitData: undefined,
  submitError: null,
};

const slice = createSlice({
  name: 'Sagas',
  initialState,
  reducers: {
    changeEditorName(state: EditorState, action: PayloadAction<string>) {
      return {
        ...state,
        name: action.payload,
      };
    },
    changeEditorLastname(state: EditorState, action: PayloadAction<string>) {
      return {
        ...state,
        lastname: action.payload,
      };
    },
    changeEditorAddress(state: EditorState, action: PayloadAction<string>) {
      return {
        ...state,
        address: action.payload,
      };
    },
    submitEditorForm: {
      reducer: (state: EditorState) => {
        return {
          ...state,
          submitPending: true,
          submitData: initialState.submitData,
          submitError: initialState.submitError,
        };
      },
      prepare: (token: string) => {
        return { payload: token };
      },
    },
    setSubmitResponse(state: EditorState, action: PayloadAction<any[]>) {
      return {
        ...state,
        submitData: action.payload,
        submitPending: false,
      };
    },
    setSubmitError(state: EditorState, action: PayloadAction<string>) {
      return {
        ...state,
        submitError: action.payload,
        submitPending: false,
      };
    },
    // requestPosts(state: PostsState) {
    //   return {
    //     ...state,
    //     posts: requestState.request(state.posts),
    //   };
    // },
    // requestPostsSucceeded(state: PostsState, action: PayloadAction<Post[]>) {
    //   return {
    //     ...state,
    //     posts: requestState.succeeded(state.posts, action.payload),
    //   };
    // },
    // requestPostsFailed(state: PostsState, action: PayloadAction<string | number>) {
    //   return {
    //     ...state,
    //     posts: requestState.failed(state.posts, action.payload),
    //   };
    // },
  },
});

export const { reducer, actions } = slice;
export default reducer;
