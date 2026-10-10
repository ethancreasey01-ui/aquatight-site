// Plain heading. (Used to animate word-by-word; removed so headings are visible on first paint.)
export default function RevealText({ children, as: Tag = "h2", className = "" }) {
  return <Tag className={className}>{children}</Tag>;
}
