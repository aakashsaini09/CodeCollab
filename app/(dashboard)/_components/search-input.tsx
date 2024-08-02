"use client";
import qs from 'query-string'
import { Search } from 'lucide-react';
import {useDebounceValue} from 'usehooks-ts'
import { Input } from '@/components/ui/input';
const SearchInput = () => {
  return (
    <div className='w-full relative ml-3'>
      <Search className='absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4'/>
      <Input className='w-full max-w-[516px] pl-9 rounded-sm' placeholder='Search board'/>
    </div>
  )
}

export default SearchInput
