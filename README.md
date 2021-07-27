# t5-code-1

<div class="custom-markdown steps-contents">
    <div class="custom-markdown steps-contents">
        <h2>Summary</h2>
        <p>Use media queries to create a responsive design for the menu shown in <em>Figure 5&ndash;57</em>. You will need to create three menu layouts: one for screen widths <strong>500</strong> pixels or less, another for screen widths of <strong>501</strong> pixels to <strong>710</strong> pixels, and a third for screen widths greater than <strong>710</strong> pixels.</p>
        <p>&nbsp;</p>
        <figure>
            <a class="markdown-image-link" title="Open image in a new tab" href="https://cdn.filestackcontent.com/TqhU2kA8SYWD6XCyfMJ3" target="_blank" rel="noopener">
                <img src="https://cdn.filestackcontent.com/TqhU2kA8SYWD6XCyfMJ3" alt="An image shows the web page of &quot;The Ridgewood Herald Tribune in mobile view, tablet view, and desktop view. In the mobile view, the header is followed by the menu and the main article. In the tablet view, the main article is displayed beside the menu, under the header. In the desktop view, the header is followed by the menu and the main article. " />
            </a>
        </figure>
        <sup><em>Figure 5-57</em></sup>
        <p>&nbsp;</p>
        <p>Do the following:</p>
    </div>
    <div class="step-block-outer step-block--not-last">
        <div class="step-block-header" role="heading" aria-level="2">Tasks</div>
        <div class="step-block-header" role="heading" aria-level="2">
            <span>Open the file </span><em>code5-1.html</em>
            <span> and </span><em>code5-1_media.css</em>
            <span> and in the comment section enter your </span><strong>name</strong>
            <span> (First + Last) and the </span><strong>date</strong>
            <span>(MM/DD/YYYY) into the </span><code>Author:</code>
            <span>and </span><code>Date:</code>
            <span> fields of each file.</span>
        </div>
        <div class="step-block-header" role="heading" aria-level="2">
            <span>
                <br />Go to the <em>code5-1.html</em> file and within the <code>head</code> section insert <code>link</code> elements linking the page to the <em>code5-1_layout.css</em> and <em>code5-1_media.css</em> files.
            </span>
        </div>
        <div class="step-block-header" role="heading" aria-level="2">
            <span>
                <br />Add a <code>viewport meta</code> tag to the document <code>head</code> to set the <code>width</code> of the layout <code>viewport</code> equal to the <code>width</code> of the device and set the initial scale of the <code>viewport</code> to <strong>1.0</strong>.
            </span>
        </div>
        <div class="step-block-header" role="heading" aria-level="2">
            <span>
                <span>
                    <br />
                </span>
            </span>
            <p>Open <em>code5-1_media.css</em> file and create a media query for devices with a maximum width of <strong>500&nbsp;</strong>pixels. Within the query do the following:</p>
            <ol>
                <li>Set the display of the <code>img</code> element within the <code>article</code> element to <strong>none</strong>.</li>
                <li>Center the text contained within the <code>ul</code> element belonging to the <code>submenu</code> class.</li>
            </ol>
            <p>Create a media query for devices with a minimum width of <strong>501</strong>pixels. Within the query do the following:</p>
            <ol>
                <li>Float the <code>nav</code> element on the left page margin.</li>
                <li>Set the <code>width</code> of the <code>nav</code> element to <strong>130</strong> pixels and the <code>height</code> to <strong>400</strong> pixels.</li>
                <li>Set the top margin of the <code>nav</code> element to <strong>30</strong> pixels, the right margin to <strong>25</strong> pixels, and the bottom and left margins to <strong>0</strong> pixels.</li>
            </ol>
            <p>Create a media query for devices with a minimum width of <strong>710&nbsp;</strong>pixels. Within the query do the following:</p>
            <ol>
                <li>Set the <code>float</code> property of the <code>nav</code> element to <strong>none</strong>, its <code>width</code> to <strong>100%</strong> and its <code>height</code> to <strong>auto</strong>. Set the <code>nav</code> element margins to <strong>0</strong>.</li>
                <li>Set the <code>display</code> of <code>ul</code> elements of the <code>mainmenu</code> class to flex with the flex flow in the row direction with no wrapping; justify the contents of the flexbox in the center.</li>
                <li>Set the flex property of <code>li</code>elements with the <code>ul.mainmenu</code> element to have a growth factor of <strong>0</strong>, a shrink factor of <strong>1</strong>, and a basis value of <strong>120</strong> pixels.</li>
            </ol>
            <p>&nbsp;</p>
        </div>
    </div>
</div>
