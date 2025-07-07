
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchRandomQuote = createAsyncThunk(
  'quote/fetchRandomQuote',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('/api/random')
      if (!res.ok) return rejectWithValue(`Server Error: ${res.status}`)
      const data = await res.json()       
      return data[0]                      
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    quote: '',       
    author: '',     
    status: 'idle',  
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = 'succeeded'
       
        state.quote  = action.payload.q    
        state.author = action.payload.a    
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = 'failed'
        state.error  = action.payload || action.error.message
      })
  }
})

export default quoteSlice.reducer
