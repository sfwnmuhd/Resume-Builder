import { Sparkles } from 'lucide-react'
import React from 'react'

const ProfessionalSummaryForm = ({data, onChange, setResumeData}) => {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <div>
            <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>Profeesional Summary</h3>
            <p className='text-sm text-gray-500'>Add summary for your resume here</p>
        </div>
        <button className='flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors diabled:opacity-50'>
            <Sparkles className='size-4'/>
            AI Enhance
        </button>
      </div>
      <div className='mt-6 '>
        <textarea value={data || ""} onChange={(e)=> onChange(e.target.value)} rows={7} name='' id='' className='w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 
        focus:border-blue-500 outline-none transition-colors resize-none' placeholder='Write professional summary'/>

        <p className='text-xs text-gray-500 max-w-4/5 mx-auto text-center'>
            Tip: A strong professional summary highlights your key skills, experiences, and career goals in a concise manner. Focus on your most relevant achievements and tailor it to the job you're applying for.
        </p>

        
      </div>
    </div>
  )
}

export default ProfessionalSummaryForm
