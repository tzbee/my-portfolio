// TagList.js;

import React from "react";
import PropTypes from "prop-types";

const TagList = ({
	className = "",
	tags = [],
	selectedTags = [],
	highlightedTags = [],
	onSelectedTagsChange
}) => {
	const handleTagClick = tag => {
		var newSelectedTags;
		if (selectedTags.includes(tag)) {
			newSelectedTags = selectedTags.filter(
				selectedTag => selectedTag !== tag
			);
		} else {
			selectedTags.push(tag);
			newSelectedTags = selectedTags;
		}
		onSelectedTagsChange(newSelectedTags);
	};

	return (
		<div className={`TagList ${className}`}>
			{tags.map(
				tag =>
					tag &&
					tag !== "*" && (
						<Tag
							key={"tag-" + tag}
							tag={tag}
							selected={selectedTags.includes(tag)}
							highlighted={highlightedTags.includes(tag)}
							onClick={handleTagClick}
							className="user-select-disabled"
						/>
					)
			)}
		</div>
	);
};

TagList.displayName = "TagList";

TagList.propTypes = {
	className: PropTypes.string,
	tags: PropTypes.array,
	selectedTags: PropTypes.array,
	highlightedTags: PropTypes.array,
	onSelectedTagsChange: PropTypes.func
};

const Tag = ({
	className = "",
	tag,
	selected = false,
	highlighted = false,
	onClick
}) => {
	const handleClick = () => {
		onClick(tag);
	};
	const selectedClass = selected ? "Tag-selected" : "";
	const highlightedClass = highlighted ? "Tag-highlighted" : "";

	return (
		<a
			className={`Tag ${className} ${selectedClass} ${highlightedClass}`}
			onClick={handleClick}
		>
			{tag}
		</a>
	);
};

Tag.displayName = "Tag";

Tag.propTypes = {
	className: PropTypes.string,
	tag: PropTypes.string,
	onClick: PropTypes.func,
	selected: PropTypes.bool,
	highlighted: PropTypes.bool
};

export default TagList;
