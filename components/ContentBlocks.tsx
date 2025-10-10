import React, { useState } from 'react';
import { ContentBlock } from '../types';
import { LightbulbIcon, BookOpenIcon, CookieIcon, SearchCircleIcon } from './Icons';

/** Renders a styled heading. */
export const HeadingBlock: React.FC<{ content: string }> = ({ content }) => (
    <div className="flex items-center gap-3 mt-8 mb-4">
        <BookOpenIcon className="h-7 w-7 text-brand-blue flex-shrink-0" />
        <h2 className="text-3xl font-bold text-brand-blue">{content}</h2>
    </div>
);

/** Renders a styled paragraph. */
export const ParagraphBlock: React.FC<{ content: string }> = ({ content }) => (
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{content}</p>
);

/** Renders a styled bulleted list. */
export const ListBlock: React.FC<{ items: string[] }> = ({ items }) => (
    <ul className="space-y-3 mb-4 text-gray-700 dark:text-gray-300">
        {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
                <CookieIcon className="h-5 w-5 text-brand-blue mt-1 flex-shrink-0" />
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

/** Renders a styled scenario block. */
export const ScenarioBlock: React.FC<{ content: { title: string; body: string } }> = ({ content }) => (
    <div className="bg-yellow-50 dark:bg-gray-800/50 border-l-4 border-yellow-400 p-4 rounded-r-lg my-6">
        <div className="flex items-center gap-3">
            <SearchCircleIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-300 flex-shrink-0"/>
            <h4 className="font-bold text-yellow-700 dark:text-yellow-300">{content.title}</h4>
        </div>
        <p className="text-yellow-800 dark:text-gray-300 mt-2 pl-9">{content.body}</p>
    </div>
);

/** Renders an interactive, collapsible content block. */
export const ClickToRevealBlock: React.FC<{ content: { title: string; body: string } }> = ({ content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="my-6">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left p-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                    <LightbulbIcon className="h-6 w-6 text-brand-blue" />
                    <span className="font-semibold text-gray-900 dark:text-white">{content.title}</span>
                </div>
                <span className={`transform transition-transform duration-300 text-gray-900 dark:text-white ${isOpen ? 'rotate-90' : ''}`}>▶</span>
            </button>
            {isOpen && (
                <div className="bg-gray-100/50 dark:bg-gray-800/50 p-4 rounded-b-lg mt-1">
                    <p className="text-gray-700 dark:text-gray-300">{content.body}</p>
                </div>
            )}
        </div>
    );
};

/**
 * A factory function that takes a content block object and returns the corresponding React component.
 * @param {ContentBlock} block The content block data.
 * @param {number} index The index for the React key.
 * @returns {React.ReactElement | null} The rendered component or null if the type is unknown.
 */
export const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
        case 'heading':
            return <HeadingBlock key={index} content={block.content as string} />;
        case 'paragraph':
            return <ParagraphBlock key={index} content={block.content as string} />;
        case 'list':
            return <ListBlock key={index} items={block.content as string[]} />;
        case 'scenario':
            return <ScenarioBlock key={index} content={block.content as { title: string; body: string }} />;
        case 'clickToReveal':
            return <ClickToRevealBlock key={index} content={block.content as { title: string; body: string }} />;
        default:
            return null;
    }
};
