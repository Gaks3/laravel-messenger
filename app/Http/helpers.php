<?php

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

if (!function_exists('upload_file')) {
    /**
     * Summary of upload_file
     * @param \Illuminate\Http\UploadedFile $file 
     * @param string $directory
     * @return string
     */
    function upload_file($file, $directory)
    {
        $extension = $file->getClientOriginalExtension();
        $file_name = Str::uuid() . '.' . $extension;

        Storage::disk('public')->putFileAs($directory, $file, $file_name);

        return "/storage/$directory/$file_name";
    }
}

if (!function_exists('remove_file')) {
    /**
     * Summary of remove_file
     * @param string $filePath
     * @return boolean
     */
    function remove_file($filePath)
    {
        if ($filePath && Storage::disk('public')->exists($filePath)) {
            return Storage::disk('public')->delete($filePath);
        }

        return false;
    }
}