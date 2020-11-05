import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MetaTagData {
  name: 'author' | 'copyright' | 'keywords' | 'description' | 'robots';
  content: string;
}

export interface SEOData {
  title: string;
  metaTags: MetaTagData[];
}

const initialState: SEOData = {
  title:
    'Template deriving from a standard create-react-app using TypeScript and Redux as a baselines entry point for most applications.',
  metaTags: [
    { name: 'author', content: 'Kresimir Cosic' },
    {
      name: 'description',
      content:
        'Template deriving from a standard create-react-app using TypeScript and Redux as a baselines entry point for most applications.',
    },
    {
      name: 'keywords',
      content:
        'javascript, typescript, reactjs, gatsbyjs, redux, firebase, template, boilerplate',
    },
  ],
};

const SEOSlice = createSlice({
  name: 'SEO',
  initialState,
  reducers: {
    setTitleData(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export const { setTitleData } = SEOSlice.actions;

export default SEOSlice.reducer;
