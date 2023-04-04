import { useState } from 'react';

export function InputForm({ isGenerating, callGenerateEndpoint }) {
    const [userInput, setUserInput] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault();
        callGenerateEndpoint(userInput);
    }

    return (
        <div className="mt-12  md:mt-18 flex flex-col items-center" >
            <div className="rounded-lg bg-slate-700 w-full sm:w-[600px] border border-slate-600">
                <form onSubmit={handleFormSubmit}>
                    <div className="flex items-center px-3 py-2">
                        <input type="text"
                            required
                            value={userInput}
                            onChange={event => { setUserInput(event.target.value) }}
                            className="block mr-3  p-2.5 w-full text-sm sm:text-base rounded-lg bg-slate-800 placeholder-slate-400 text-white"
                            placeholder="Run every hour between 1pm to 4pm everyday of the week..."
                        />
                        <button type="submit" className="inline-flex justify-center p-2  rounded-full cursor-pointer  bg-blue-600 hover:bg-blue-700">
                            {isGenerating ?
                                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg> :
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1200 1200">
                                    <g fill="white">
                                        <path d="m586.01 128.23 80.809-9.7188c7.7031-0.92578 13.129 7.3789 9.1797 14.062l-41.438 70.055c-1.5703 2.6523-1.7266 5.9023-0.43359 8.6992l34.211 73.848c3.2656 7.043-2.9648 14.762-10.535 13.066l-79.43-17.773c-3.0117-0.67188-6.1562 0.17969-8.4102 2.2695l-59.664 55.355c-5.6875 5.2812-14.965 1.7383-15.684-5.9883l-7.6445-81.035c-0.28906-3.0703-2.0742-5.7969-4.7656-7.2969l-71.09-39.637c-6.7812-3.7812-6.2773-13.691 0.83984-16.766l74.699-32.316c2.832-1.2227 4.8711-3.7578 5.4727-6.7812l15.73-79.859c1.5-7.6094 11.074-10.199 16.211-4.3789l53.82 61.055c2.0234 2.3516 5.0625 3.5156 8.1211 3.1406z" />
                                        <path d="m1026.4 138.34 47.988-5.7734c4.5703-0.55078 7.8008 4.3789 5.4492 8.3516l-24.613 41.605c-0.9375 1.5703-1.0312 3.5039-0.26562 5.1719l20.316 43.859c1.9336 4.1758-1.7656 8.7734-6.2656 7.7656l-47.172-10.547c-1.7891-0.39453-3.6484 0.10938-4.9922 1.3555l-35.438 32.879c-3.3828 3.1328-8.8789 1.0312-9.3125-3.5508l-4.5469-48.121c-0.16797-1.8242-1.2227-3.4453-2.832-4.332l-42.215-23.543c-4.0195-2.2422-3.7305-8.125 0.50391-9.9609l44.363-19.188c1.6797-0.73047 2.8906-2.2305 3.2539-4.0312l9.3477-47.426c0.88672-4.5234 6.5742-6.0586 9.625-2.6055l31.957 36.266c1.2266 1.3555 3.0234 2.0508 4.8477 1.8242z" />
                                        <path d="m900.31 692.83 24.191-37.32c2.3047-3.5625 7.6914-2.9297 9.1094 1.0664l14.902 41.902c0.5625 1.5859 1.8711 2.7969 3.5039 3.2266l42.973 11.473c4.0938 1.0938 5.1602 6.4062 1.8008 9l-35.242 27.133c-1.332 1.0312-2.0742 2.6406-1.9922 4.332l2.3633 44.41c0.22656 4.2344-4.5 6.8867-8.0039 4.4883l-36.695-25.141c-1.3906-0.94922-3.1562-1.1641-4.7266-0.55078l-41.508 15.973c-3.9609 1.5234-7.9453-2.1484-6.7422-6.2148l12.574-42.672c0.48047-1.6211 0.13281-3.3594-0.9375-4.668l-28.02-34.547c-2.6758-3.2891-0.40625-8.2188 3.8281-8.3398l44.461-1.2227c1.6992-0.035156 3.2461-0.91406 4.1602-2.3281z" />
                                        <path d="m771.27 584.47 133.68-133.68c20.172-20.172 20.172-53.184 0-73.355l-21.672-21.672c-20.172-20.172-53.184-20.172-73.355 0l-133.68 133.68z" />
                                        <path d="m651.18 514.5-516.23 516.23c-20.172 20.172-20.172 53.184 0 73.355l21.672 21.672c20.172 20.172 53.184 20.172 73.355 0l516.23-516.23z" />
                                    </g>
                                </svg>
                            }
                        </button>
                    </div>
                </form>
            </div>
            <p className="text-xs italic text-gray-400 mt-1">Results are generated by AI and may be inconsistent.</p>
        </div >
    )
}