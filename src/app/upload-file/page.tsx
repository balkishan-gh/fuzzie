"use client"; // is needed only if you’re using React Server Components
import * as LR from "@uploadcare/blocks";

LR.registerBlocks(LR);

function UploadFile() {
  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="87b809a93660f939a5f1" />
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />
    </div>
  );
}

export default UploadFile;
