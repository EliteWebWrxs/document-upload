/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";
import Image from "next/image";
import { urlForImage } from "../lib/utils";

export default function CustomPortableText({
  className,
  value,
  variant = "default",
}: {
  className?: string;
  value: PortableTextBlock[];
  variant?: "default" | "legal";
}) {
  const legalComponents: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p className="mb-5 text-justify leading-[1.7] text-gray-800">
          {children}
        </p>
      ),
      centered: ({ children }) => (
        <p className="mb-6 text-center text-lg font-medium leading-relaxed text-gray-900">
          {children}
        </p>
      ),
      h1: ({ children }) => (
        <h1 className="mb-6 mt-8 text-center font-sans text-2xl font-bold uppercase tracking-tight text-gray-900">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="mb-5 mt-7 text-center font-sans text-xl font-bold uppercase tracking-tight text-gray-900">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="mb-4 mt-8 font-sans text-[15px] font-bold uppercase tracking-wide text-gray-900">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="mb-3 mt-6 font-sans text-[14px] font-semibold text-gray-900">
          {children}
        </h4>
      ),
      h5: ({ children }) => (
        <h5 className="mb-2 mt-5 font-sans text-[13px] font-semibold text-gray-800">
          {children}
        </h5>
      ),
      h6: ({ children }) => (
        <h6 className="mb-2 mt-4 font-sans text-[13px] font-medium text-gray-700">
          {children}
        </h6>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-semibold text-gray-900">{children}</strong>
      ),
      em: ({ children }) => (
        <em className="italic text-gray-800">{children}</em>
      ),
      underline: ({ children }) => (
        <span className="underline decoration-gray-400 underline-offset-2">{children}</span>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="mb-5 ml-10 list-disc space-y-2.5 marker:text-gray-600">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="mb-5 ml-10 list-decimal space-y-2.5 marker:text-gray-600">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="leading-[1.7] text-gray-800">{children}</li>,
      number: ({ children }) => <li className="leading-[1.7] text-gray-800">{children}</li>,
    },
  };

  const defaultComponents: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100 md:text-5xl text-shadow-lg">
          { children }
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="mb-5 mt-8 text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100 md:text-4xl">
          { children }
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="mb-4 mt-6 text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-100 md:text-3xl">
          { children }
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="mb-3 mt-5 text-xl font-semibold leading-tight text-gray-900 dark:text-gray-100 md:text-2xl">
          { children }
        </h4>
      ),
      h5: ({ children }) => (
        <h5 className="mb-3 mt-4 text-lg font-semibold leading-tight text-gray-800 dark:text-gray-200">
          { children }
        </h5>
      ),
      h6: ({ children }) => (
        <h6 className="mb-2 mt-3 text-base font-semibold leading-tight text-gray-700 dark:text-gray-300">
          { children }
        </h6>
      ),
      normal: ({ children }) => (
        <p className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          { children }
        </p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="my-6 border-l-4 border-purple-500 bg-purple-50 py-4 pl-6 pr-4 italic text-gray-800 dark:border-blue-400 dark:bg-blue-900/20 dark:text-gray-200">
          { children }
        </blockquote>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            href={ value?.href }
            rel="noreferrer noopener"
            className="font-medium text-blue-600 underline decoration-blue-600/30 underline-offset-2 transition-colors hover:text-blue-800 hover:decoration-blue-800/50 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:text-blue-300 dark:hover:decoration-blue-300/50"
          >
            { children }
          </a>
        );
      },
      strong: ({ children }) => (
        <strong className="font-semibold text-gray-900 dark:text-gray-100">
          { children }
        </strong>
      ),
      em: ({ children }) => (
        <em className="italic text-gray-800 dark:text-gray-200">{ children }</em>
      ),
      code: ({ children }) => (
        <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800 dark:bg-gray-800 dark:text-gray-200">
          { children }
        </code>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
          { children }
        </ul>
      ),
      number: ({ children }) => (
        <ol className="mb-4 ml-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300">
          { children }
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="leading-relaxed">{ children }</li>,
      number: ({ children }) => <li className="leading-relaxed">{ children }</li>,
    },
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) return null;

        return (
          <div className="my-6 flex justify-center">
            <Image
              src={ urlForImage(value)
                .width(800)
                .height(400)
                .fit("crop")
                .auto("format")
                .url() }
              alt={ value.alt || "Image" }
              width={ value.width || 800 }
              height={ value.height || 400 }
              placeholder="blur"
              blurDataURL={ urlForImage(value).width(800).blur(10).url() }
              className="rounded-md object-cover"
            />
          </div>
        );
      },
    },
  };

  const components = variant === "legal" ? legalComponents : defaultComponents;

  return (
    <div className={ className }>
      <PortableText components={ components } value={ value } />
    </div>
  );
}
