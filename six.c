// create a function removeNonAlphabets (char * inputFileName, char * outputFileName) in C
#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/types.h>
#include <sys/stat.h>
void removeNonAlphabets(char inputFile[], char outputFile[])
{
	int fd1, fd2, rd, wr;
	char buffer[100], newBuffer[100];
	fd1 = open(inputFile, O_RDONLY);
	if (fd1 != -1)
		rd = read(fd1, buffer, 100);
	int i, k = 0;
	if (rd != -1)
	{
		i, k = 0;
		for (i = 0; i < rd; i++)
		{

			if (!(buffer[i] < 'A' || buffer[i] > 'Z' && buffer[i] < 'a' || buffer[i] > 'z'))
			{
				newBuffer[k] = buffer[i];
				k++;
			}
		}
	}
	fd2 = open(outputFile, O_WRONLY);
	if (fd2 != -1)
		wr = write(fd2, newBuffer, k);
	if (wr != -1)
	{
		printf("Successfully written non alphabets from %s file to %s file.\n", inputFile, outputFile);
	}
	close(fd1);
	close(fd2);
}
int main()
{
	removeNonAlphabets("F1.txt", "F2.txt");
	printf("Success :)\n");
}
